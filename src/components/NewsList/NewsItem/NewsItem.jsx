import { useTranslation } from "react-i18next";
// import Button from "../../../shared/Button";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
 
import s from "./news-item.module.css"

const TodoItem = (props) => {

  const { id, title, body, onClick } = props
  const { t } = useTranslation();

  return (
    <li className={s.item}>
      <div>
        <p className={s.title}>{title}</p>
        <p className={s.body}>{body}</p>
        <div className={s.button}>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            type="button"
            onClick={(e) => {onClick(id);}}
          >
            {t("delete-btn")}
          </Button>
          {/* <Button
            text={t("delete-btn")}
            type="button"
            onClick={(e) => {onClick(id);}}
          /> */}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;