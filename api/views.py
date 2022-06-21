from django.shortcuts import render

# Create your views here.


def renderFrontend(request):
    context = {}
    return render(request, "index.html", context)
