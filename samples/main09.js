
function userLogs(username) {
    function wrap(message) {
        console.log(`[${username}] ${message}`);
    }
    return wrap;
}

const log1 = userLogs('Chinseok Lee');
log1('Line 1');
log1('Line 2');
log1('Line 3');

const log2 = userLogs('Park');
log2('Line 1');
log2('Line 2');
log2('Line 3');