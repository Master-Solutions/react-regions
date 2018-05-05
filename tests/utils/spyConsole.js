export default function spyConsole() {
    const originalConsole = global.console;
    const originalJsDomEmit = window._virtualConsole.emit;

    beforeEach(() => {
        global.console = {
            warning: jest.fn(),
            error: jest.fn()
        };
        jest.spyOn(window._virtualConsole, 'emit').mockImplementation(() => false);
    });

    afterEach(() => {
        global.console = originalConsole;
        window._virtualConsole.emit = originalJsDomEmit;
    });
}