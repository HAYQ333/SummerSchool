#include <iostream>

bool isPowerOfTwo(int n) {
    if (n <= 0) {
        return false; 
    }
    while (n > 1) {
        if (n % 2 != 0) {
            return false; 
        }
        n = n / 2; 
    }
    return true; 
}

int main() {
    int num;
    std::cout << "Մուտքագրէք թիւ՝ ";
    std::cin >> num;

    if (isPowerOfTwo(num)) {
        std::cout << num << "-ը 2-ի աստիճան է։" << std::endl;
    } else {
        std::cout << num << "-ը 2-ի աստիճան չէ։" << std::endl;
    }

    return 0;
}
        
