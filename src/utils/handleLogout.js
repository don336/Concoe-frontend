export const handleLogOut = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("customerId");

  if (localStorage.length === 0) {
    window.location.reload();

    window.location.href = "/login";
  }
};
