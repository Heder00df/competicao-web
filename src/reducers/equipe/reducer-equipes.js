import {
  BUSCAR_EQUIPES
} from "../../actions/types";

export default function  reducerEquipes ( state = [], action) {
  switch (action.type) {
    case BUSCAR_EQUIPES: {
      return action.payload.data;
    }
    default:{
      return state;
    }
  }
}
