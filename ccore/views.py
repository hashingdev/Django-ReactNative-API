from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def login(request):
    if request.method == 'POST':
        samp = request.POST.get('samp')
        if samp == 'login':
            user = request.POST.get('username')
            password = request.POST.get('password')

            if user == 'hammad' and password == 'hammad':
                print('done')
                return JsonResponse({'success': 'success'})
            else:
                print('wrong')
    return render(request, 'core/login.html')