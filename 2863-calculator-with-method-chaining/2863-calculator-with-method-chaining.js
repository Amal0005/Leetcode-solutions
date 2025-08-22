class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.initialValue=value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.initialValue+=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.initialValue-=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.initialValue*=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value===0)throw new Error("Division by zero is not allowed")
        this.initialValue=this.initialValue/value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
    this.initialValue=this.initialValue**value
    return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.initialValue
    }
}