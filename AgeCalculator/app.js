document.addEventListener('DOMContentLoaded', function() {
    // Populate the year dropdown with a range of years
    var yearSelect = document.getElementById('year');
    var currentYear = new Date().getFullYear();
    var startYear = currentYear - 100; // For example, range from current year - 100 to current year
    var endYear = currentYear;
    for (var i = startYear; i <= endYear; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }

    // Disable date dropdown initially
    var dateSelect = document.getElementById('date');
    dateSelect.disabled = true;

    // Update date dropdown when year or month changes
    function updateDateDropdown() {
        var month = parseInt(document.getElementById('month').value);
        var year = parseInt(document.getElementById('year').value);

        // Disable date dropdown if year or month is not selected
        dateSelect.disabled = isNaN(year) || isNaN(month);

        // Adjust the number of days in February for leap years
        var daysInFebruary = 28;
        if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
            daysInFebruary = 29;
        }

        // Populate date dropdown with correct number of days
        dateSelect.innerHTML = '<option value="" disabled selected>Select Date</option>';
        for (var i = 1; i <= daysInFebruary; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = i;
            dateSelect.appendChild(option);
        }
    }

    document.getElementById('year').addEventListener('change', updateDateDropdown);
    document.getElementById('month').addEventListener('change', updateDateDropdown);
});

function age() {
    var d1 = parseInt(document.getElementById("date").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 += month[m2 - 1];
        m2--;
    }

    if (m1 > m2) {
        m2 += 12;
        y2--;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
