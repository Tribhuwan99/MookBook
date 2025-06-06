function handleSearch() {
    const input = document.getElementById("searchInput").value.trim();
    if (input) {
      alert("Searching for: " + input);
      // You can implement real search later or redirect here
    } else {
      alert("Please enter a search term.");
    }
  }
function openSidebar() {
      document.getElementById("sidebar").style.right = "0";
    }

    function closeSidebar() {
      document.getElementById("sidebar").style.right = "-250px";
    }