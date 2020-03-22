function Promise(executor) {
    const self = this
    this.status = 'pending'
    this.value = null
    this.reason = null
  
    function resolve(value) {
      self.value = value
    }
  
    function reject(reason) {
      self.reason = reason
    }
  
    executor(resolve, reject)
  }
  
  Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {
    onfulfilled(this.value)
  
    onrejected(this.reason)
  }

  console.log(Promise)