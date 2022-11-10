import { alphabetSortOnKey } from "../main/data/alphabetSortOnKey";

test('sort an array of objects on an object key alphabetically', () => {
    expect(alphabetSortOnKey([
        { key: 'z' },
        { key: 'a' },
        { key: 'f' },
        { key: 'ace' },
        { key: 'a' }
    ], 'key')).toStrictEqual([
        { key: 'a' },
        { key: 'a' },
        { key: 'ace' },
        { key: 'f' },
        { key: 'z' }
    ])
});