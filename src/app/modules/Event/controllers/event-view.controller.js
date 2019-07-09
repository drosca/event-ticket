export default class EventViewController {
  constructor($state, $stateParams, eventsServices) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.eventsServices = eventsServices;
    this.event = {};
    this.ticketId = '';
    this.status = '';
    this.tickets = [];
    this.stockData = [];

    this.getAvailableTickets();

    if (this.$stateParams.id) {
      this.id = this.$stateParams.id;
      this.getEvent(this.id);
      this.getEventTicket(this.id);
    }
  }

  getAvailableTickets() {
    let eventID = '6a81c26c-96ae-42f5-9e5b-6a027af49a64';
    this.eventsServices.getAvailableTickets(eventID).then(resp => {
      angular.forEach(resp.data.available, ticket => {
        this.stockData.push({
          'Available Tickets': ticket
        })
      })
    })
  }

  getEvent(id) {
    this.eventsServices.getEvent(id).then(resp => {
      this.event = resp.data;
    })
  }

  checkStatus(id) {
    this.eventsServices.checkStatus(id).then(resp => {
      this.status = resp.data.status;
    })
  }

  getEventTicket(id) {
    this.eventsServices.getEventTicket(id).then(resp => {
      this.tickets = resp.data;
    })
  }

  goToHome() {
    this.$state.go('events');
  }

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  downloadCSV(args) {
    var data, filename, link;
    var csv = this.convertArrayOfObjectsToCSV({
      data: this.stockData
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
}

angular.module('event', ['$state', '$stateParams', 'eventsServices'])
  .controller('EventViewController', EventViewController);