export type DataColumns = 'customer name' | 'customer e-mail' | 'country' | 'gender' | 'age' | 'annual Salary' | 'credit card debt' | 'net worth' | 'car purchase amount';

export type Data = Array<{ [k: DataColumns]: string }>;

export const DataLabels: { [k: DataColumns]: string } = {
    'customer name': 'Customer Name',
    'customer e-mail': 'Customer E-Mail',
    'country': 'Country',
    'gender': 'Gender',
    'age': 'Age',
    'annual Salary': 'Annual Salary',
    'credit card debt': 'Credit Card Debt',
    'net worth': 'Net Worth',
    'car purchase amount': 'Car Purchase Amount'
};
