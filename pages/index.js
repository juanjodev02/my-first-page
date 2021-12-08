const Index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-2 bg-dark">Header</div>
        <div className="d-none d-md-block col-10 bg-danger">Menu</div>
      </div>
      <div className="row d-sm-none">
        <div className="col-12 bg-danger">
          Menu
        </div>
      </div>
      <div className="row" style={{height: '300px'}}>
        <div className="col-12 bg-primary">
          Hero
        </div>
      </div>
      <div className="row" style={{height: '200px'}}>
        <div className="col-4 bg-dark">
          Main
        </div>
        <div className="col-3 offset-5">
          <div className="row h-50">
            <div className="col bg-warning">
              Image
            </div>
          </div>
          <div className="row h-50">
            <div className="col bg-info">
              Extra
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <div className="row" style={{height: '300px'}}>
        <div className="col-12 bg-warning">
          Footer
        </div>
      </div>
    </div>
  );
}

export default Index;