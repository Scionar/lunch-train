import store, { initialState } from './store';

describe('#store', () => {
  afterAll(() => {
    store.clear();
  });

  it('smoketest', () => {
    store.create();
    store.get();
  });

  it('gets initialState', () => {
    const state = store.get().getState();
    expect(state).toEqual(initialState);
  });
});
