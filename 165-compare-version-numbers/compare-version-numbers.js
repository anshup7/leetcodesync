/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split(".");
    version2 = version2.split(".");
    let pointer1 = 0;
    let pointer2 = 0;
    const v1Len = version1.length;
    const v2Len = version2.length;

    while(pointer1 < v1Len && pointer2 < v2Len) {
        if(+version1[pointer1] < +version2[pointer2]) return -1;
        if(+version1[pointer1] > +version2[pointer2]) return 1;
        pointer1++;
        pointer2++;
    }

    while(pointer1 < v1Len) {
        if(version1[pointer1] != 0) return 1; 
        pointer1++;
    }
    while(pointer2 < v2Len) {
       if(version2[pointer2] != 0) return -1; 
        pointer2++;
    }

    return 0;
};