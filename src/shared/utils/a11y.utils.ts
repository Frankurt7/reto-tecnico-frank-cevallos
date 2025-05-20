function filterKeyEnter(handler: (...args: Array<any>) => any) {
  return (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      handler(e);
    }
  };
}

export function accessibleOnClick(handler: (...args: Array<any>) => any, tabIndex?: number) {
  return {
    role: 'button',
    tabIndex: tabIndex || 0,
    onKeyDown: filterKeyEnter(handler),
    onClick: handler,
  };
}
