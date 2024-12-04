import React from 'react'

export default function userprofile() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
            </ol>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" style={{"height":500,"width":600}} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary position-relative top-20">
              Inbox
              <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
