import { RootState } from "../store";
import { authSelector } from "./auth.slice";


const selectAuthInfos = (state: RootState) => {
  const authInfos = authSelector(state);
  return { authInfos }
}

export { selectAuthInfos }