import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown'; // -------- custom component -------- //
import Image from 'next/image.js';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';

import { specialities, doctors } from '../data.js';
const Navbar = (props) => {
  const { navClassName, navOtherClass, fancy, stickyBox, logoAlt } = props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const router = useRouter();

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links

  const renderLinks = (links) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  const handleAboutUs = () => {
    router.push('/about-us');
  };

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo | Patel Nursing Home"
              className="py-2"
              src={`/img/logo-pnh.webp`}
              width={250}
              height={100}
            />
          }
        />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | Patel Nursing Home"
                className="py-2"
                src={`/img/logo-pnh.webp`}
                width={250}
                height={100}
              />
            }
          />
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link " />
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="About Us"
                onClick={handleAboutUs}
                href="/about-us"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {doctors.map(({ id, url, title }) => {
                  return <ListItemLink key={id} href={`${url}`} title={title} linkClassName="dropdown-item" />;
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Specialities" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {specialities.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="Specialities" />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    );
                  }

                  return <ListItemLink key={id} href={`/${url}`} title={title} linkClassName="dropdown-item" />;
                })}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/facilities" title="Facilities" className="nav-link " />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/contact-us" title="Contact Us" className="nav-link " />
            </li>
            <li className="nav-item align-items-center d-flex" data-bs-dismiss="offcanvas">
              <NextLink
                title="Book Appointment"
                href="/book-appointment"
                className="btn btn-sm primary-bg text-white mb-lg-1 rounded border border-md-none"
              />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="pnhandheri@gmail.com " className="link-inverse" href="mailto:pnhandheri@gmail.com " />
              <br />
              <NextLink href="tel:+919892056258" title="+91 98920 56258" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
          <span />
        </button>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other  d-flex  d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;
