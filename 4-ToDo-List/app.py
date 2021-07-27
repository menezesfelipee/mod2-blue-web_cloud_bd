from flask import Flask, render_template, request, redirect

app = Flask(__name__)
lista = []

@app.route('/')
def index():
    nomeFormulario = 'To-Do List'
    listaPronta = True
    return render_template(
        'index.html',
        nomeFormulario = nomeFormulario,
        listaPronta = listaPronta,
        lista = lista)

@app.route('/new', methods=['POST','GET'])
def new():
    if request.method == 'POST':
        item = request.form['item']
        lista.append(item)
        return redirect('/')

@app.route('/clear')
def clear():
    lista.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)