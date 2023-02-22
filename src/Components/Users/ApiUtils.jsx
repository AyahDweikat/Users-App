import axios from "axios";

export async function getPageUsers(
  nationality ="",
  gender = "",
  pageNum,
  numUsersPerPage
) {
  if (!nationality && !gender && pageNum === 1) {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}`
    );
    if (res.status === 200) {
      console.log("1");
      return res.data.results;
    }
  }
  if (!nationality && !gender && pageNum > 1) {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
    );
    if (res.status === 200) {
      console.log("1");
      return res.data.results;
    }
  } else if (!nationality) {
    let res = await axios.get(
      `https://randomuser.me/api/?results=${numUsersPerPage}&gender=${gender}`
    );
    if (res.status === 200) {
      console.log("3");
      return res.data.results;
    }
  } else if (!gender) {
    let res = await axios.get(
      `https://randomuser.me/api/?results=${numUsersPerPage}&nat=${nationality}`
    );
    if (res.status === 200) {
      console.log("2");
      return res.data.results;
    }
  }
}
