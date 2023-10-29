var contacts = [];

    document.getElementById('addContactBtn').addEventListener('click', function () {
    
      // Store input values in variables
      var name = document.getElementById('name').value.trim();
      var mobile = document.getElementById('mobile').value.trim();
      var email = document.getElementById('email').value.trim();

      // Validate input values
      if (!isValidName(name) || !isValidMobile(mobile) || !isValidEmail(email)) {
        document.getElementById('error').innerHTML = 'Invalid input. Please check your entries.';
        return;
      }

      // Clear error message
      document.getElementById('error').innerHTML = '';
      
      // Add contact to the array
      contacts.push({ name: name, mobile: mobile, email: email });

      renderTable();

      // Clear input fields
      document.getElementById('name').value = '';
      document.getElementById('mobile').value = '';
      document.getElementById('email').value = '';
    });

    function isValidName(name) {
      var nameRegex = /^[a-zA-Z\s]{1,20}$/;
      return nameRegex.test(name);
    }

    function isValidMobile(mobile) {
      var mobileRegex = /^\d{10}$/;
      return mobileRegex.test(mobile);
    }

    function isValidEmail(email) {
      var emailRegex = /.+@.+\..+/;
      return emailRegex.test(email) && email.length <= 40;
    }

    function renderTable() {
      var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
      table.innerHTML = '';

      contacts.forEach(function (contact, index) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = contact.name;
        cell2.innerHTML = contact.mobile;
        cell3.innerHTML = contact.email;

        if (index % 2 !== 0) {
          row.style.backgroundColor = '#f2f2f2';
        }
      });
    }

    function sortTable(columnIndex) {
      contacts.sort(function (a, b) {
        var x = a[Object.keys(a)[columnIndex]].toLowerCase();
        var y = b[Object.keys(b)[columnIndex]].toLowerCase();
        return x.localeCompare(y);
      });

      renderTable();
    }

    document.getElementById('search').addEventListener('input', function () {
      var searchValue = this.value.trim().toLowerCase();
      var table = document.getElementById('contactsTable');
      var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
      var noResultDiv = document.getElementById('noResult');

      noResultDiv.style.display = 'none';

      for (var i = 0; i < rows.length; i++) {
        var mobileValue = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();

        if (mobileValue.includes(searchValue)) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }

      var visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
      if (visibleRows.length === 0) {
        noResultDiv.style.display = 'block';
      }
    });