import React from 'react'
import { Card, Col, CardTitle, Button, Modal, CardHeader, Row, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddOrder from './AddOrder';
import AddModal from './AddModal';
import { render } from '@testing-library/react';
import EditModal from './EditModal';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import "./order.css";
const Order = (props) => {
  const editB = () => {
    console.log("order123", props.order)
    render(
      <EditModal oId={props.order.orderId} />
    )
  }

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 2;     
  const pageCount = Math.ceil(8/ userPerPage);
  const pagesVisited = pageNumber * userPerPage;

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
        <div className="cardClass">
          <div className="ui cards align center">
            <div className="card">
              <div className="content">
                <a className="header">ORDER ID: {props.order.orderId}</a>
                <div class="meta">
                  <span className="date">Name: {props.order.nameCustomer}</span>
                  <br/>
                  <span className="date">Email Id: {props.order.email}</span>
                  <br/>
                  <span className="date">Mobile No: {props.order.mobileNumber}</span>
                </div>
                <div className="description">
                Shipping Address: {props.order.shippingAddress}
                <br/>
                Billing Address: {props.order.billingAddress}
                <br/>
                Order Date: {props.order.orderDate}
                </div>
              </div>
              <div class="extra content">
              {props.order.paymentStatus==true?
                <a>
              <CardTitle className="cardTitle">Payment Status: Prepaid</CardTitle>
                </a>:
                <a>
                <CardTitle className="cardTitle">Payment Status: Postpaid</CardTitle>
                </a>}
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="positive ui button" onClick={editB} color="primary">UPDATE</div>
                  {/* <Button onClick={()=>addP(o)} color="primary" >ADD</Button> */}

                  <div className="negative ui button" >TRACK ORDER</div>
                  {/* <Button color="danger" onClick={()=>deleteP(o)}>Delete</Button> */}
                </div>
              </div>
            </div>    
            <Container style={{marginBottom:10}} className="text-center"></Container>
          </div>
          {/* <div className="paginatedclass1">
          <ReactPaginate className="paginatebuttons"
          previousLabel="Prev"
          nextLabel={'Next'}
          breakLabe={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="boxes"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-link"
          previousLinkClassName="page-item"
          nextClassName="page-link"
          nextLinkClassName="page-item"
          breakClassName="page-link"
          breakLinkClassName="page-item"
          activeClassName="active"
          ></ReactPaginate>
          </div> */}
        </div>
      )
}

export default Order
