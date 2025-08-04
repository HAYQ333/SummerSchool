#include <iostream>

int main()
{
    int N;
    char S;
    
    std::cout << "N=";
    std::cin >> N;
    std::cout << "S=";
    std::cin >> S;
    for (int i=0; i<N; i++){
        for (int j=0; j<i+1; j++){
            std::cout << S; 
        }
        std::cout << "\n";
    }
    for (int i=0; i<N; i++){
        int n=N-i-1;
        for (int j=0; j<n; j++){
            std::cout << " "; 
        }
        for (int j=n; j<N; j++){
            std::cout << S; 
        }
        std::cout << "\n";
    }

    return 0;
}
