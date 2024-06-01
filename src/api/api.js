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
}
