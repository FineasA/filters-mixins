export const reversedMixin = {
    data() {
        return {
            inputText: ""
        };
    },
    computed: {
        reverseTextComputed() {
            return `${this.inputText
                .split("")
                .reverse()
                .join("")} (${this.inputText.length})`;
        }
    }
}