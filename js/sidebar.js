document.addEventListener("DOMContentLoaded", () => {
  const openSidebar = document.getElementById("openSidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");

  if (openSidebar) {
    openSidebar.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      sidebar.classList.add("active");
      document.body.classList.add("sidebar-active");
    });
  }

  if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("active");
      document.body.classList.remove("sidebar-active");
    });
  }

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      e.target !== openSidebar
    ) {
      sidebar.classList.remove("active");
      document.body.classList.remove("sidebar-active");
    }
  });
});
