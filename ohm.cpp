#include <iostream>
using namespace std;

int main(){

  float V,I,R;

  cout<<"Masukkan Arus : ";
  cin>>I;

  cout<<"Masukkan Hambatan : ";
  cin>>R;

  V = I * R;

  cout<<"Tegangan = "<<V;

  return 0;
}