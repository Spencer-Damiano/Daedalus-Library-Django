from django.shortcuts import render, HttpResponse

'''
def _func-name_(request):
    fetch data from database

    context = {
        'key': value,

        'header': 'header',
        'body': 'body',
        'footer': 'footer',
    }

    return render(request, 'html-file-name.html', context)
'''

# Create your views here.
def hello(request):
    return HttpResponse('Hello, world!')

