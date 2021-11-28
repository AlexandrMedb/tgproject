import { useParams } from "react-router-dom";

// import { characterInterface } from "../../../interfaces/charactrInterface";

export const CharacterList = () => {
  const { chatId } = useParams<{ chatId?: string }>();
  return <h1>{chatId}</h1>;
};
