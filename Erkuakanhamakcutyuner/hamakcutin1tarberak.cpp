#include <iostream>
#include <cmath>

int main() {
    int b = 5; 
    int toxiq = pow(2, b); 
    
    for (int i = 0; i < toxiq; i++) {
        char binary[b+1]; 
        int num = i;
        for (int j = b - 1; j >= 0; j--) {
            binary[j] = (num % 2 == 0 ? '0' : '1');
            num /= 2;
        }
        binary[b] = '\0'; 
        std::cout << binary << std::endl;
    }
    
    return 0;
}
