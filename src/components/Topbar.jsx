// =========================================================
// =========================================================
const Topbar = () => {
  return (
    <div className="text-white fw-bold fs-15 d-flex  row justify-content-center g-0  secondary-bg">
      <div className="bg-color py-1 d-flex     align-items-center justify-content-center">
        <div className="d-flex flex-row align-items-center justify-content-center me-10 ms-14  ms-xl-n10">
          <p className="mb-0 ms-5">Opening Time: &nbsp; Monday To Saturday - (10am to 1pm & 5pm to 7:30pm)</p>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center col-auto me-2">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-envelope"></i>
          </div>
          <a href="mailto:pnhandheri@gmail.com " className="link-white hover ">
            pnhandheri@gmail.com
          </a>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center col-auto me-10  ">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-phone-volume"></i>
          </div>
          <a href="tel:+919372459691" className="link-white hover ">
            +91 93724 59691
          </a>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center col-auto">
          <a
            href="https://www.facebook.com/profile.php?id=61564993801509"
            className="link-white hover me-2"
            target="_blank"
          >
            <div className="icon text-white fs-22 mt-1">
              <i className="uil uil-facebook"></i>
            </div>
          </a>
          <a
            href="https://www.instagram.com/patel.nursinghome_/?fbclid=IwZXh0bgNhZW0CMTEAAR2I1ndldskzW0[…]_91QBPRqyOVs59cx0iqKibNY_wbyFAc58_aem_S0CreplDYrE_0BmD8aRtdg"
            target="_blank"
            className="link-white hover"
          >
            <div className="icon text-white fs-22 mt-1">
              <i className="uil uil-instagram"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
