import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import {
  fetchPosts,
  removePost,
} from "../../store/news/news-operations";

import NewsList from 'components/NewsList';

import ArticleIcon from '@mui/icons-material/Article';

import s from "./news-page.module.css";

const NewsPage = () => {

  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
    
  const onRemove = useCallback(
    (id) => {
      dispatch(removePost(id));
    },
    [dispatch]
  );
    
    return (
      <>
        <div className={s.wrapper}>
          <ArticleIcon className={s.icon} fontSize="large"></ArticleIcon>
          <h1 className={s.title}>{t("news")}</h1>
        </div>
        <NewsList onClick={onRemove} />
      </>
    )
}

export default NewsPage;
