import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { getPosts } from "../../store/news/news-selector";

import TodoItem from './NewsItem';
// import Button from '../../shared/Button';

import Button from '@mui/material/Button';

import s from "./news-list.module.css"

const NewsList = ({ onClick }) => {
    const [limit, setLimit] = useState(10);
    
    const { t } = useTranslation();
    
    const loadMoreBtn = () => {
        setLimit((limit) => limit + 10);
    }

    const postsStore = useSelector(getPosts);
    
    const { posts } = postsStore;
    const postsSlice = posts.slice(0, limit);

    return (
        <div className="container">
            <div>
                <ul className={s.list}>
                {postsSlice.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        onClick={onClick}
                        {...todo}
                    />
                ))}
                </ul>
                
            </div>
            {limit <= 100 ? <div className={s.wrapper}>  <Button
                className={s.btn}
                variant="outlined"
                type="button"
                onClick={() => loadMoreBtn()}
            >{t("load-more")}</Button> </div> : <p className={s.all}>{t("all-news")}</p>}
        </div>
  );
};

export default NewsList;