class Calendar {
    constructor(inputSelector) {
        this.input = $(inputSelector);
        this.form = this.input.parent();
        this.popupContainer = null;
        this.monthContainer = null;
        this.tableContainer = null;
        this.table = $("<table></table>");
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.selectedMonth = new Date().getMonth();
        this.selectedYear = new Date().getFullYear();
        
        this.buildCalendar();
        this.setMainEventListener();
    }
    
    buildCalendar() {
        this.popupContainer = $("<div></div>").addClass("calendar-popup");
        this.form.append(this.popupContainer);
  
        
        this.monthContainer = $("<div></div>").addClass("month-and-year").html(`<h4>${this.getMonth()} ${this.getYear()}</h4>`);
        this.popupContainer.append(this.monthContainer);
  
        this.createButtons();
  
        this.populateTable(this.selectedMonth, this.selectedYear);
    }
  
    createButtons() {
        const prev = $("<button></button>").addClass('button prev').html("<i class='fas fa-chevron-left'></i>");
        const next = $("<button></button>").addClass('button next').html("<i class='fas fa-chevron-right'></i>");
  
        prev.on("click", e => {
            e.preventDefault();
            this.updateMonth(this.selectedMonth - 1);
        });
  
        next.on("click", e => {
            e.preventDefault();
            this.updateMonth(this.selectedMonth + 1);
        });
  
        this.popupContainer.append(prev);
        this.popupContainer.append(next);
    }
  
    populateTable(month, year) {
        this.table.empty();
  
        const namesRow = $("<tr></tr>");
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach(name => {
            const th = $("<th></th>").html(name);
            namesRow.append(th);
        });
        this.table.append(namesRow);
  
        const tempDate = new Date(year, month, 1);
        let firstMonthDay = tempDate.getDay();
        firstMonthDay = firstMonthDay === 0 ? 7 : tempDate.getDay();
  
        const daysInMonth = this.getDaysInMonth(month, year);
        const j = daysInMonth + firstMonthDay - 1;
  
        let tr = $("<tr></tr>");
  
        if (firstMonthDay-1 !== 0) {
            tr = $("<tr></tr>");
            this.table.append(tr);
        }
  
        for (let i=0; i<firstMonthDay-1; i++) {
            const td = $("<td></td>").html("");
            tr.append(td);
        }
  
        for (let i = firstMonthDay-1; i<j; i++) {
            if(i % 7 === 0){
                tr = $("<tr></tr>");
                this.table.append(tr);
            }
  
            const td = $("<td></td>").text(i - firstMonthDay + 2).addClass("day");
            td.dayNr = i - firstMonthDay + 2;
  
            td.on("click", e => {
                const selectedDay = $(e.target).text();
                this.fillInput(selectedDay);
                this.hideCalendar();
            });
  
            tr.append(td);
        }
  
        this.popupContainer.append(this.table);
    }
  
    fillInput(day) {
        day = day < 10 ? "0" + day : day;
        let month = null;
        month = this.selectedMonth < 9 ? "0" + (this.selectedMonth + 1) : this.selectedMonth + 1;
        this.input.val(`${day}.${month}.${this.selectedYear}`);
    }
  
    updateMonth(month) {
        this.selectedMonth = month;
        if (this.selectedMonth < 0) {
            this.selectedYear--;
            this.selectedMonth = 11;
        } else if (this.selectedMonth > 11) {
            this.selectedYear++;
            this.selectedMonth = 0;
        }
        this.monthContainer.html(`<h4>${this.months[this.selectedMonth]} ${this.selectedYear}</h4>`);
  
        this.populateTable(this.selectedMonth, this.selectedYear)
    }
    
    getMonth() {
        return this.months[this.selectedMonth];
    }
  
    getYear() {
        return this.selectedYear;
    }
  
    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    hideCalendar() {
        this.form.removeClass("open");
    }
  
    setMainEventListener() {
        this.input.on("click", e => {
            this.form.toggleClass("open");
            
            if(!this.form.hasClass("open")) {
                this.hideCalendar();
            }
        });
    }
  }
  
  new Calendar(".date-input");
  