
import React, { useState} from "react";
import styled from "styled-components";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
// import axios from "axios";


const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageContent]= useState(6);
  const [searchResults, setSearchResults] = useState([]);
  const [rating] = useState(5);
  


  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  const onPageChange = (page) => {
    setPageNumber(page);
  };
  // const handleRatingFunc = async(id)=>{
  //   console.log("Card id : ",id)
  //   await axios.get(
  //     `${process.env.REACT_APP_BACKEND_URL}/api/reviews/${id}`
  //   ).then((res)=>{
  //     setRating(res.data.overallRating);   
  //   }).catch((err)=>{
  //     // setRating(0);   
  //     console.log(err)
  //   })
  // }
  return (
    

    <StyledDiv>

      <div className="search">
        <SearchBar onSearchResultsUpdate={updateSearchResults} />
      </div>
      <div className="details">
        {searchResults &&
          searchResults
            .slice((pageNumber - 1) * pageContent, pageNumber * pageContent)
            .map((item) => {
            //   <Link key={item.id} to={`/details/${item.id}`}>
                // handleRatingFunc(item.id);
                return <Card
                  title={item.name}
                  extra={
                     <Link to={`/details/${item.id}`}>Click</Link>

                  }
                  style={{
                    width: "100%",
                    marginBottom: "40px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>
                    <span style={{ fontWeight: "600" }}>Brewery Address: </span>
                    {item.address_1}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Phone No: </span>
                    {item.phone}
                  </p>
                  <p>
                      <span style={{ fontWeight: "600" }}>Website: </span>
                       <a href={item.website_url} target="_blank" rel="noreferrer noopener">
                         {item.website_url}
                                   </a>
                            </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Current Rating: </span>
                    {rating}
                    
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>State: </span>
                    {item.state}
                  </p>
                </Card>
            //   </Link>
                })}
      </div>
      <div className="page">
        <Pagination
          current={pageNumber}
          pageSize={pageContent}
          total={searchResults.length}
          onChange={onPageChange}
        />
      </div>
    </StyledDiv>
  );
};

export default Homepage;

const StyledDiv = styled.div`
  background-color: hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .search {
    background-color: #f1f1f1;
    border-bottom: 2px dashed black;
    padding: 20px;
    box-sizing: border-box;

  }

  .details {
    display: grid;

    gap: 38px 80px;
    padding: 35px 20px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 10px;
      border: 2px dashed #ff2e63;
      border-radius: 30px 0px 0px 30px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 30px 0px 0px 30px;
      background: #ff2e63;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: hsl(345, 100%, 50%);
    }
  }

  .page {
    box-shadow: 0px -10px 10px -10px rgba(0, 0, 0, 0.2);
    padding-top: 10px;
  }
`;







