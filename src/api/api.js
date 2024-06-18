// const base_url = "/api";
const base_url = "http://localhost:3065";

export class Api {
  static Session(body) {
    return {
      url: base_url + "/session",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  }

  static TokenValidate(session) {
    return {
      url: base_url + "/session/validate",
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static GetUser(session) {
    return {
      url: base_url + `/user/${session.user.id}`,
      options: {
        method: "GET",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static CreateUser(body) {
    return {
      url: base_url + "/user",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  }

  static GetIncomeCategory(session) {
    return {
      url: base_url + "/income-category",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static GetExpenseCategory(session) {
    return {
      url: base_url + "/expense-category",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static GetPayMethod(session) {
    return {
      url: base_url + "/pay-method",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static GetExpenseTypes(session) {
    return {
      url: base_url + "/expense-types",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static GetIncomePlanning(session) {
    return {
      url: base_url + "/income-planning",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static async CreateIncomePlanning(session, body) {
    return {
      url: base_url + "/income-planning/",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
        body: JSON.stringify(await body),
      },
    };
  }

  static async UpdateIncomePlanning(session, body, id) {
    return {
      url: base_url + "/income-planning/" + id,
      options: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
        body: JSON.stringify(await body),
      },
    };
  }

  static async DeleteIncomePlanning(session, id) {
    return {
      url: base_url + "/income-planning/" + id,
      options: {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  //

  static GetExpensePlanning(session) {
    return {
      url: base_url + "/expense-planning",
      options: {
        method: "get",
        headers: {
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }

  static async CreateExpensePlanning(session, body) {
    return {
      url: base_url + "/expense-planning/",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
        body: JSON.stringify(await body),
      },
    };
  }

  static async UpdateExpensePlanning(session, body, id) {
    return {
      url: base_url + "/expense-planning/" + id,
      options: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
        body: JSON.stringify(await body),
      },
    };
  }

  static async DeleteExpensePlanning(session, id) {
    return {
      url: base_url + "/expense-planning/" + id,
      options: {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.token,
        },
      },
    };
  }
}
