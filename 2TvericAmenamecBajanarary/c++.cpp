
#include 

int main() {
    int a, b;
    int max, min;
    
    std::cout << "Enter first number: ";
    std::cin >> a;
    
    std::cout << "Enter second number: ";
    std::cin >> b;
    
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    
    for (int i = min; i > 0; i--) {
        if (min % i == 0 && max % i == 0) {
            std::cout << "GCD: " << i;
            return 0;
        }
    }
    
    return 0;
}
