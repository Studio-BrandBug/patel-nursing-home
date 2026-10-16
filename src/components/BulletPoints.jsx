const BulletPoint = ({heading, arr, icon, position}) => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
      <h2 className="display-4">{heading}</h2>
      <div className="mt-5">
        {arr.map((item) => (
          <div key={item.no} className={`card-body p-1 `}>
            <div className={`d-flex align-items-${position ? position: 'center'} mb-1`}>
              <div>
                <span
                  className="icon btn btn-circle btn-md btn-soft-primary border pe-none me-4"
                  style={{ width: '2rem', height: '2rem' }}
                >
                  <i className={`uil ${icon ? icon :'uil-check'} fs-28`} />
                </span>
              </div>
              <div>
                <h4 className="m-0">{item.text}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletPoint;
