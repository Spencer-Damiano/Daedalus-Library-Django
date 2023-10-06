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
    content = {
        'name': 'Daedalus',
    }
    return render(request, 'index.html', content)

def index(request):
    content = {
        'name': 'Daedalus Library',
    }
    return render(request, 'index.html', content)