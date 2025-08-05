#include <iostream>

int main()
{
    int a[10];
    std::cout << "Մուտքագրուեք թուերը" << std::endl;
    for (int i=0;i<10;i++){
        std::cin >> a[i];
    }
    
    int N;
    a:
    std::cout << "\nՄուտքագրուեք N թիւ" << std::endl;
    std::cin >> N;
    for (int i=0;i<10;i++){
        if (a[i]==N){
            for (int j=i;j<9;j++){
                a[j]=a[j+1];
            }
            a[9]=0;
            break;
        }
    }
    for (int i=0;i<10;i++){
        std::cout <<a[i]<<",";
    }
    goto a;
    return 0;
}
