import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('app')).toBe('app')
    })
    test('with mods', () => {
        expect(classNames('app',
            { hover: true, active: false },
            [])).toBe('app hover')
    })
    test('with mods & additional classes', () => {
        expect(classNames('app',
            { hover: false, active: true },
            ['cls1', 'cls2'])).toBe('app active cls1 cls2')
    })
})
