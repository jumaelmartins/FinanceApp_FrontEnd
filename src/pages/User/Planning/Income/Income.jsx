import React from "react";
import PlanningFooter from "../Footer/PlanningFooter";
import AddItem from "../../../../components/Icons/AddItem";
import useFetch from "../../../../hooks/useFetch";
import { Table } from "../../../../components/Table/Index";
import { Api } from "../../../../api/api";
import { UserContext } from "../../../../context/UserContext";
import { Modal } from "../../../../components/Modal/Index";
import { Input } from "../../../../components/Form/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getDate } from "../../../../helper/getDate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatMonth } from "../../../../helper/formatMonth";

const Income = () => {
  const { request } = useFetch();
  const { session } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [category, setCategory] = React.useState([]);
  const [id, setId] = React.useState(null);
  const { schema } = React.useContext(UserContext);
  const [selectedItem, setSelectedItem] = React.useState({});

  const getData = async () => {
    const { url, options } = Api.GetIncomePlanning(session);
    const { json } = await request(url, options);
    return json;
  };

  const addItem = async (body) => {
    const { url, options } = await Api.CreateIncomePlanning(session, body);
    return await request(url, options);
  };

  const editItem = async (body) => {
    const { url, options } = await Api.UpdateIncomePlanning(session, body, id);
    return await request(url, options);
  };

  const deleteItem = async () => {
    const { url, options } = await Api.DeleteIncomePlanning(session, id);
    return await request(url, options);
  };

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: getData,
    queryKey: ["income-planning"],
  });

  const addMutate = useMutation({
    mutationFn: addItem,
    onSuccess: () => queryClient.invalidateQueries(["income-planning"]),
  });

  const editMutate = useMutation({
    mutationFn: editItem,
    onSuccess: () => queryClient.invalidateQueries(["income-planning"]),
  });

  const deleteMutate = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => queryClient.invalidateQueries(["income-planning"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema("")),
  });

  const handleConfirm = () => {
    deleteMutate.mutate();
    handleClose();
  };

  const handleEdit = ({ target }) => {
    setShowModal(true);
    setIsEditing(true);
    const itemId = Number(target.closest("tr").id);
    const itemToEdit = data.find((item) => item.id === itemId);
    setSelectedItem(itemToEdit);
    setId(itemId);
  };

  const handleAdd = () => {
    setShowModal(true);
    setIsAdding(true);
  };

  const handleDelete = ({ target }) => {
    setShowModal(true);
    setIsDeleting(true);
    setId(Number(target.closest("tr").id));
  };

  const handleClose = () => {
    setShowModal(false);
    setIsEditing(false);
    setIsDeleting(false);
    setIsAdding(false);
  };

  const onSubmit = async (data) => {
    const formatedDate = getDate(data.month);
    const body = {
      ...data,
      category_id: Number(data.category_id),
      month: formatedDate,
    };
    if (isAdding) {
      addMutate.mutate(body);
    }

    if (isEditing) {
      editMutate.mutate(body);
    }
    handleClose();
  };

  React.useEffect(() => {
    const getCategory = async () => {
      const { url, options } = Api.GetIncomeCategory(session);
      const { json } = await request(url, options);
      setCategory(json);
    };
    getCategory();
  }, [session, request]);

  React.useEffect(() => {
    if (isEditing && selectedItem) {
      setValue("category_id", selectedItem.category_id);
      setValue("month", formatMonth(selectedItem.month));
      setValue("planned_amount", selectedItem.planned_amount);
    }
  }, [isEditing, selectedItem, setValue]);

  return (
    <>
      <Modal.Root show={showModal} onClose={handleClose}>
        {(isAdding || isEditing) && (
          <Modal.Form onClose={handleClose} onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label htmlFor="category_id">Categoria</label>
              <select {...register("category_id")} name="category_id">
                <option>Selecione</option>
                {category.map((category) => (
                  <option
                    className={category.category_name}
                    key={category.id}
                    value={category.id}
                  >
                    {category.category_name}
                  </option>
                ))}
              </select>
              <Input
                formType={"addEdit"}
                register={register}
                id={"month"}
                type={"month"}
              />
              <Input
                formType={"addEdit"}
                register={register}
                id={"planned_amount"}
              />
            </fieldset>
          </Modal.Form>
        )}
        {isDeleting && (
          <Modal.Confirm onClose={handleClose} onConfirm={handleConfirm} />
        )}
      </Modal.Root>

      <div className="planning">
        <header className="">
          <h2>Planned Incomes</h2>
          <form action=""></form>
        </header>
        <div onClick={handleAdd}>
          <button>
            <i>
              <AddItem onClick={handleAdd} />
            </i>
          </button>
        </div>
        <Table.Root>
          <Table.Head type={"income"}></Table.Head>
          <Table.Row
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            data={data}
            type={"income"}
          />
        </Table.Root>
        <section>
          <PlanningFooter />
        </section>
      </div>
    </>
  );
};

export default Income;
