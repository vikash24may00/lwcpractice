import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/WireAsPropertyAccountController.getAccounts';

export default class AccountSearch extends LightningElement {
    // The search key entered by the user
    searchKey = '';

    // Wire adapter to call Apex method based on the search key
    // Fetches accounts from the server whenever the search key changes
    @wire(getAccounts, { searchKey: '$searchKey' }) accounts;

    // Handle input change in the search field
    handleInputChange(event) {
        // Update the search key, which triggers the wire adapter to fetch data
        this.searchKey = event.target.value;
    }
}
