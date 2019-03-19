export default new class {
  _message = ' - sample message';
  _mutating = false;

  constructor() {
    window.addEventListener('copy', () => {
      if (this._mutating) return;
      this._mutating = true;
      this.copy(window.getSelection().toString() + this._message);
      this._mutating = false;
    });
  }

  copy(v) {
    const el = document.createElement('textarea');
    document.body.appendChild(el);
    el.value = v;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  setMessage(v) {
    this._message = v;
  }
};