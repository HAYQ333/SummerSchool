#include <iostream>

int main()
{
    int M;
    int N;
    char S;
    
    std::cout << "M=";
    std::cin >> M;
    std::cout << "N=";
    std::cin >> N;
    std::cout << "S=";
    std::cin >> S;
    for (int i=0; i<M; i++){
        for (int j=0; j<N; j++){
            char s;
            if (i!=0 && i!=M-1 && j!=0 && j!=N-1) s=' ';
            else s=S;
            std::cout << s; 
        }
        std::cout << "\n";
    }

    return 0;
}
