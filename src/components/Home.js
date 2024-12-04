import React from 'react'


export default function Home() {
  
  return (
    
    <div className="container">
      <div className="card" style={{"width": 1000}}>
        <div className="card-header">
          <h4 className="card-title display-1">This is a Home Page</h4>
        </div>
        <div className="card-body">
          <img src="https://media.istockphoto.com/id/1188852580/vector/business-people-analyzing-marketing-reports.jpg?s=612x612&w=0&k=20&c=ENvbIVnVmMUBxPL-_RdS1pq5ai_tZoYr-0jGjCxx4SY=" alt="" style={{ "height": 300,"width": 400}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic quas, laudantium animi voluptate fuga libero nesciunt saepe perspiciatis maxime. Iste, excepturi facere nihil dolorum quae perferendis voluptas saepe minus odit illo doloribus. Vitae mollitia iusto quidem ducimus labore voluptatem.</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-block btn-info">
            Details
          </button>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://media.istockphoto.com/id/868833696/vector/circle-dot-halftone-circular-pattern-vector-white-minimal-gradient-texture-background.jpg?s=612x612&w=0&k=20&c=frrJsnIxKXY6LDTIH1A-h-S07N5ftu3y0YMhTEom8Ng=" alt="" style={{ "height": 300,"width": 400}} />
          <div className="card-header">
            <h4 className="card-title display-3">Your Details</h4>
          </div>
          <div className="card-body">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic quas, laudantium animi voluptate fuga libero nesciunt saepe perspiciatis maxime. Iste, excepturi facere nihil dolorum quae perferendis voluptas saepe minus odit illo doloribus. Vitae mollitia iusto quidem ducimus labore voluptatem.</p>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-block btn-info">
              Details
            </button>
          </div>
      </div>
    </div>
  )
}
