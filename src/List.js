import React from 'react';
import axios from 'axios';
import UsersList from './Component/ListUser';
import { useState, useEffect, useRef } from "react";

//1.  useEffect(callback)  
//      - Gọi callback mỗi khi component re-render 
//      - Gọi callback sau khi component thêm Element vào DOM  
//2.  useEffect(callback, [])
//      - Chỉ gọi callback 1 lần sau khi component mounted
//3.  useEffect(callback, [deps])
//      - Callback sẽ được gọi lại mỗi khi deps thay đổi


// ------------- Điểm chung --------------
// + Callback luôn được gọi sau khi component mount
// + Cleanup function luôn được gọi trước khi component unmount
// + Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)



// checkScroll :  
//  + Phải là biến toàn cục hoặc 
//  + Sử dụng useRef để tạo biến toàn cục

// var checkScroll = 1;

function List() {

  var checkScroll = useRef(1);

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    loadUsers(page);
  }, [page]);
  useEffect(() => {
    const onscrollMore = () => {
      
      if (checkScroll.curent === 1 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPage(prevState => prevState + 1);
        checkScroll.curent = 2;
        
      }
    }
    window.addEventListener('scroll', onscrollMore);
    return () => {
      window.removeEventListener('scroll', onscrollMore);
    }
  }, []);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const loadUsers = (pag) => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${pag}&results=10`)
      .then((response) => {
        setUsers(prevState => {
          return [...prevState, ...response.data.results];
        });
        setErrorMsg('');
      })
      .catch((error) =>
        setErrorMsg('Error while loading data. Try again later.')
      )
      .finally(() => {
        checkScroll.curent = 1;
        setIsLoading(false)
      });
  };
  return (
    <div className="main-section">
      <UsersList users={users} />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div className="load-more">
        <span>Trang: {page}</span>
        <button style={{
          position: 'fixed',
          right: 10,
          bottom :10
        }} onClick={loadMore} className="btn-grad">
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>

    </div>
  );
}

export default List;
