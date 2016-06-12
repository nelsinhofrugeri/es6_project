class NegotiationController {
    constructor() {
        var $             = document.querySelector.bind(document);
        this._inputDate   = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue  = $('#value');

        // List of the negotiations
        this._negotiations = new Negotiations();

        // Rendering View
        new NegotiationView($('#negotiationView')).render();
    }

    add(event) {
        event.preventDefault();

        this._negotiations.add(this._createNegotiation());
        this._cleanForm();

        console.log(this._negotiations.list);
    }

    /* --- Private Methods --- */

    _createNegotiation() {
        return new Negotiation(
            DateHelper.convertForDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputValue.value
        );
    }

    _cleanForm() {
        this._inputDate.value   = '';
        this._inputAmount.value = 1;
        this._inputValue.value  = 0.0;

        this._inputDate.focus();
    }
}