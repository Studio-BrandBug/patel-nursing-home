// ========================================================
// ========================================================
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/profile.php?id=61564993801509'
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/patel.nursinghome_/?fbclid=IwZXh0bgNhZW0CMTEAAR2I1ndldskzW0[…]_91QBPRqyOVs59cx0iqKibNY_wbyFAc58_aem_S0CreplDYrE_0BmD8aRtdg' 
  }
];

const SocialLinks = ({ className = 'nav social  mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={`${icon} fs-30 bg-white rounded`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
