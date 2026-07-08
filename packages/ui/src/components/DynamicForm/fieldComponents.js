import { INPUT_TYPES } from "../../constants/inputTypes";

import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import FileInput from "../FileInput/FileInput";

const fieldComponents = {
  [INPUT_TYPES.TEXT]: Input,
  [INPUT_TYPES.EMAIL]: Input,
  [INPUT_TYPES.PASSWORD]: Input,
  [INPUT_TYPES.NUMBER]: Input,
  [INPUT_TYPES.DATE]: Input,
  [INPUT_TYPES.FILE]: FileInput,

  [INPUT_TYPES.TEXTAREA]: TextArea,
  [INPUT_TYPES.CHECKBOX]: Checkbox,
  [INPUT_TYPES.RADIO]: Radio,
  [INPUT_TYPES.SELECT]: Select,
};

export default fieldComponents;
