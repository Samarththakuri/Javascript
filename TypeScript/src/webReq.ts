import axios from "axios";
import type { AxiosResponse } from "axios";
interface Todo {
  userID: number;
  id: number;
  title: string;
  completed: boolean;
}
axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});

// {"userid":1,
//     "id":1,
//     "title":"delectus aut autem",
//     "completed":false
// }

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Todo", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
    }
  }
};
